<template>
    <footer class="p-3 shadow-inner bg-slate-50">
        <div class="flex justify-between">
            <div />
            <ul class="flex gap-3">
                <li>
                    <NavLink
                        :text="$t('layout.footer.privacy_policy')"
                        to="/legal/privacy-policy"
                    />
                </li>
                <li>
                    <NavLink
                        :text="$t('layout.footer.cookie_policy')"
                        to="/legal/cookie-policy"
                    />
                </li>
                <li>
                    <NavLink
                        :text="$t('layout.footer.terms_of_service')"
                        to="/legal/terms-of-service"
                    />
                </li>
            </ul>
            <I18nDropdown />
        </div>
    </footer>
</template>

<script setup>
import I18nDropdown from "~/components/atoms/i18nDropdown.vue";
import NavLink from "~/components/atoms/NavLink.vue";
</script>
