<template>
    <div id="app">
        <b-navbar type="is-primary">
            <template slot="brand">
                <b-navbar-item
                    tag="router-link"
                    :to="{ path: '/' }"
                >
                    <img
                        src="./assets/images/icon.png"
                        alt="Azur Lane Command Room"
                    >
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item href="#">
                    Home
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="div">
                    <b-button
                        class="has-text-right"
                        type="is-info"
                        icon-left="heart"
                        tag="a"
                        href="https://ko-fi.com/W7W71CF9V"
                        expanded
                    />
                </b-navbar-item>
            </template>
        </b-navbar>
        <router-view />
    </div>
</template>
