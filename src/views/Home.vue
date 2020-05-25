<template>
    <div>
        <section class="hero has-background is-medium">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Azur Lane Command Room
                    </h1>
                </div>
            </div>
        </section>
        <div class="columns is-centered">
            <div class="column is-6">
                <section class="section">
                    <div class="container has-text-centered">
                        <b-icon
                            pack="fas"
                            icon="exclamation-triangle"
                            size="is-large"
                            type="is-warning"
                        />
                        <p>
                            <b>Work in Progress!</b>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    &.has-background {
        background: 
            linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 20%),
            url("../assets/images/bg_night.png") no-repeat fixed 50%;
        background-size: cover;
    }

    .title {
        color: white;
    }
}
</style>