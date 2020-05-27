<template>
    <div class="columns is-centered">
        <div 
            class="column
                    is-10-widescreen
                    is-9-fullhd
                    is-9-desktop"
        >
            <section class="section">
                <p class="title">
                    Search
                </p>
                <b-input 
                    :model="query"
                    icon-right="search"
                    expanded
                />
                <div class="columns is-reversed-mobile">
                    <div class="column is-two-thirds">
                        <slot name="items" />
                    </div>
                    <div class="column">
                        <p class="subtitle">
                            Filters
                        </p>
                        <slot name="filters" />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>