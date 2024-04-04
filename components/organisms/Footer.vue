<template>
    <footer class="p-3 shadow-inner bg-slate-50">
        <div class="flex justify-center">
            <ul class="flex gap-3">
                <li>
                    <NavLink text="Privacy Policy" to="/legal/privacy-policy" />
                </li>
                <li>
                    <NavLink text="Cookie Policy" to="/legal/cookie-policy" />
                </li>
                <li>
                    <NavLink
                        text="Terms of Service"
                        to="/legal/terms-of-service"
                    />
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
import NavLink from "~/components/atoms/NavLink.vue";
</script>
