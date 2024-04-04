<template>
    <footer class="footer">
        <div class="container">
            <ul class="footer-links">
                <li>
                    <NuxtLink to="/legal/privacy-policy">Privacy Policy</NuxtLink>
                </li>
                <li><NuxtLink to="/legal/cookie-policy">Cookie Policy</NuxtLink></li>
                <li>
                    <NuxtLink to="/legal/terms-of-service">Terms of Service</NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding: 20px 0;
    background-color: #f5f5f5;
    text-align: center;
}
.container {
    max-width: 1140px;
    margin: 0 auto;
}
.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footer-links li {
    display: inline;
    margin: 0 10px;
}
.footer-links li a {
    color: #007bff;
    text-decoration: none;
}
</style>
