<template>
    <HeroSection
        :title="$t('hero.title')"
        :description="$t('hero.description')"
        :rules="$t('hero.rules')"
        :button="$t('hero.play')"
        :img="dangerousStatsNerdsImage"
    />
    <Faq :title="$t('faq.title')" :items="FaqItems" />
</template>

<script setup>
import HeroSection from "~/components/molecules/HeroSection.vue";
import Faq from "~/components/organisms/Faq.vue";
import dangerousStatsNerdsImage from '~/assets/img/dangerous-stats-nerds.png';

const { t } = useI18n();

const FaqItems = [
    {
        title: t("faq.items.goal.title"),
        text: t("faq.items.goal.text"),
    },
    {
        title: t("faq.items.frequency.title"),
        text: t("faq.items.frequency.text"),
    },
    {
        title: t("faq.items.luck.title"),
        text: t("faq.items.luck.text"),
    },
    {
        title: t("faq.items.signup.title"),
        text: t("faq.items.signup.text"),
    },
    {
        title: t("faq.items.data_concern.title"),
        text: t("faq.items.data_concern.text"),
    },
    {
        title: t("faq.items.compete.title"),
        text: t("faq.items.compete.text"),
    },
    {
        title: t("faq.items.fake.title"),
        text: t("faq.items.fake.text"),
    },
    {
        title: t("faq.items.play_now.title"),
        text: t("faq.items.play_now.text"),
    },
];
</script>