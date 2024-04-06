<template>
    <HeroSection
        title="Payments tool for software companies"
        description="From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack."
        button="Play !"
        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
    />

    <Faq title="Frequently asked questions" :items="FaqItems" />
</template>

<script setup>
import HeroSection from "~/components/molecules/HeroSection.vue";
import Faq from "~/components/organisms/Faq.vue";

const FaqItems = [
    {
        title: "What does 'free updates' include?",
        text: "You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.",
    },
    {
        title: "What does 'lifetime access' exactly mean?",
        text: "Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.",
    },
    {
        title: "How does support work?",
        text: "We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.",
    },
    {
        title: "I want to build more than one project. Is tha",
        text: "You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine.",
    },
    {
        title: "What does 'free updates' include?",
        text: "The free updates that will be provided is based on the roadmap that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.",
    },
    {
        title: "What does the free version include?",
        text: "The free version of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.",
    },
    {
        title: "What is the difference between Windster and Tailwind UI?",
        text: "Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes.",
    },
    {
        title: "Can I use Windster in open-source projects?",
        text: "Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself.",
    },
];
</script>
