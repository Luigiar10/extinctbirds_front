<template>
    <header>
        <div class="container">
            <div class="logo">
                <a href="/">Extinct Birds</a>
            </div>
            <div class="navigation">
                <nav>
                    <ul>
                        <li>
                            <NuxtLink to="/">
                                Home
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/information">
                                Information
                            </NuxtLink>
                        </li>
                        <!-- <li>
                            <NuxtLink to="/sounds">
                                Sounds
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/images">
                                Images
                            </NuxtLink>
                        </li> -->
                        <!-- <li>
                            <NuxtLink to="https://extinctbirds.org/blog" target="_blank">
                                Blog
                            </NuxtLink>
                        </li> -->
                        <li>
                            <a href="https://extinctbirds.org/blog" target="_blank">Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </header>
</template>

<style>

.line {
    background-color: var(--color-main);
    width: 2.4rem;
    height: 0.4rem;
    margin-bottom: 0.28rem;
    border-radius: 1rem;
}

.burger {
    cursor: pointer;
}

header {
    height: 10vh;
}

header .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

header .logo a {
    font-weight: 700;
    font-size: 2rem;
}

header .container .navigation {
    display: none;
}

header .container .show-navigation {
    z-index: 99;
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100vw;
    height: 90vh;
    background-color: var(--color-background-main);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 768px) {
    .burger {
        display: none;
    }

    header .container .navigation {
        display: block;
    }

    header .container .navigation nav ul {
        display: flex;
        align-items: center;
    }

    header .container .navigation nav ul li {
        margin-right: 2rem;
    }

    header .container .navigation nav ul li:last-child {
        margin-right: 0;
    }
}

</style>