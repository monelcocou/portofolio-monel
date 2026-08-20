"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const EMAIL = "monelcocou@gmail.com";
const PHONE = "(+33) 7 44 72 09 33";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: PHONE,
    href: "tel:+33744720933",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: "Rennes, France",
    href: null,
  },
];

const services = [
  { value: "opportunite", label: "Une opportunité (alternance, CDI)" },
  { value: "projet", label: "Un projet ou une mission" },
  { value: "technique", label: "Une question technique" },
  { value: "autre", label: "Autre" },
];

const initialForm = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "", // champ piège anti-robots
};

const Contacts = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");
    setErrorMessage("");

    const service = services.find((item) => item.value === form.service);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          phone: form.phone,
          subject: service ? service.label : "",
          message: form.message,
          website: form.website,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrorMessage(data.error || "L’envoi a échoué. Réessayez.");
        setStatus("error");
        return;
      }

      setForm(initialForm);
      setStatus("sent");
    } catch {
      setErrorMessage(
        "Impossible de joindre le serveur. Vérifiez votre connexion.",
      );
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="mb-14 text-center xl:text-left">
          <h1 className="h2 mb-4">
            Me <span className="text-accent">contacter</span>
          </h1>
          <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
            Une opportunité, un projet ou une simple question ? Écrivez-moi, je
            réponds sous 48 heures.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h2 className="text-4xl text-accent">Travaillons ensemble</h2>
              <p className="text-white/60">
                Décrivez-moi votre demande en quelques lignes, je reviens vers
                vous rapidement.
              </p>

              {/*input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  placeholder="Prénom"
                  aria-label="Prénom"
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder="Nom"
                  aria-label="Nom"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Adresse email"
                  aria-label="Adresse email"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Numéro de téléphone"
                  aria-label="Numéro de téléphone"
                />
              </div>

              {/*Select*/}
              <Select
                value={form.service || undefined}
                onValueChange={(value) =>
                  setForm((previous) => ({ ...previous, service: value }))
                }
              >
                <SelectTrigger className="w-full" aria-label="Objet de votre message">
                  <SelectValue placeholder="Objet de votre message" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Objet de votre message</SelectLabel>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/*textarea*/}
              <Textarea
                className="h-[200px]"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message"
                aria-label="Votre message"
                required
              />

              {/*Champ piège : masqué aux humains, visible pour les robots*/}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {/*Button*/}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button
                  type="submit"
                  size="md"
                  className="max-w-40"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Envoi…" : "Envoyer"}
                </Button>

                {status === "sent" && (
                  <p className="text-accent" role="status">
                    Message envoyé, je vous réponds sous 48 heures.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-400" role="alert">
                    {errorMessage}{" "}
                    <a href={`mailto:${EMAIL}`} className="underline">
                      {EMAIL}
                    </a>
                  </p>
                )}
              </div>
            </form>
          </div>

          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]   text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-xl hover:text-accent transition-all"
                        >
                          {item.description}
                        </a>
                      ) : (
                        <h3 className="text-xl">{item.description}</h3>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
