<template>
    <nav>
        <v-app-bar color="#fff" app>
            <v-row>
                <v-col
                    xl="1"
                    lg="1"
                    md="1"
                    sm="2"
                    cols="3"
                    class="__custom__mobile__padding__right__zero"
                >
                    <!-- <v-app-bar-nav-icon
                        class="theme--light "
                        @click.stop="drawer = !drawer"
                    ></v-app-bar-nav-icon> -->
                    <div class="header_toggle_icon">
                        <i
                            class="fa-solid fa-bars"
                            @click.stop="drawer = !drawer"
                        ></i>
                    </div>
                </v-col>

                <v-col
                    xl="11"
                    lg="11"
                    md="11"
                    sm="10"
                    cols="9"
                    class="__custom__mobile__padding__left__zero"
                >
                    <div class="custom_company_language_auth_table_cell">
                        <div class="custom_header_top_language_content">
                            <div class="__custom__header__top__language">
                                <button
                                    class="__custom__header__top__language__english language__select__active"
                                >
                                    EN
                                </button>
                                <button
                                    class="__custom__header__top__language__english"
                                >
                                    BN
                                </button>
                            </div>
                        </div>

                        <div class="custom_header_top_company_content">
                            <div
                                class="custom_header_top_company_customer_name"
                            >
                                <p>Mohasagor It</p>
                            </div>
                            <div class="custom_header_top_company_title">
                                <p>Company</p>
                            </div>
                        </div>
                        <div class="custom_header_top_auth_content">
                            <div class="user-profile">
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <div v-on="on" class="d-flex">
                                            <div
                                                class="dashboard_header_chip"
                                                style="cursor: pointer"
                                            >
                                                <p
                                                    style="
                                                        font-size: 12px;
                                                        text-align: center;
                                                    "
                                                >
                                                    <span
                                                        class="d-block"
                                                        style="
                                                            margin-bottom: 3px;
                                                            font-size: 13;
                                                            font-weight: 600;
                                                        "
                                                        >Saiful islam</span
                                                    >
                                                    <span
                                                        class="user"
                                                        style="
                                                            font-size: 13px;
                                                            text-transform: capitalize;
                                                        "
                                                        >Manager</span
                                                    >
                                                </p>
                                            </div>
                                            <v-avatar
                                                color="indigo"
                                                text
                                                style="cursor: pointer"
                                                class="custom_dashboard_header_top_auth_image"
                                            >
                                                <img
                                                    :src="
                                                        static_image_url +
                                                        'users/user.png'
                                                    "
                                                    alt=""
                                                />
                                            </v-avatar>
                                        </div>
                                    </template>
                                    <v-list flat class="header_profile_menu">
                                        <v-list-item
                                            class="header_profile_menu_link"
                                            router
                                            :to="{
                                                name: 'inventory_profile',
                                            }"
                                            active-class="border"
                                        >
                                            <v-list-item-title
                                                >Profile</v-list-item-title
                                            >
                                        </v-list-item>

                                        <v-list-item
                                            active-class="border"
                                            class="header_profile_menu_link"
                                        >
                                            <v-list-item-title
                                                >Logout</v-list-item-title
                                            >
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-app-bar>

        <!-- ====================================== Sidebar Part Start ====================================== -->
        <v-navigation-drawer
            v-model="drawer"
            color="#2a3042"
            app
            class="darken-4 custom__sidebar"
        >
            <v-layout>
                <div class="">
                    <a href="/inventory/dashboard" class="sidebar-brand">
                        <div class="sidebar-logo">
                            <img
                                :src="static_image_url + 'logo/logo.jpg'"
                                alt=""
                            />
                        </div>
                        <div class="sidebar-name">
                            <span>MIT SME</span>
                        </div>
                    </a>
                </div>
            </v-layout>

            <!-- Sidebar part -->
            <v-list dense>
                <v-list-item class="mb-2">
                    <a href="/admin/dashboard" class="custom_router_link">
                        <span class="sidebar-menu-icon">
                            <i class="fa-solid fa-house"></i>
                        </span>
                        Dashboard
                    </a>
                </v-list-item>

                <!-- service -->
                <v-list-group class="mb-2">
                    <template v-slot:activator>
                        <div class="custom_dropdown_router_link custom_mb_10">
                            <span class="sidebar-menu-icon">
                                <i class="fa-brands fa-servicestack"></i>
                            </span>
                            Service
                        </div>
                    </template>
                    <router-link to="#" class="custom_router_sub_link">
                        <span class="ml-3">Category</span>
                    </router-link>
                </v-list-group>
            </v-list>
            <!-- Sidebar part -->
        </v-navigation-drawer>
        <!-- ====================================== Sidebar Part End ====================================== -->
    </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            static_image_url: "/../storage/static/",
        };
    },
    /* ========================== Methods ========================== */
    methods: {
        /* ================== Check Breakpoint ================== */
        checkScreenWidth() {
            // Use Vuetify's breakpoint object to check the current screen width
            if (this.$vuetify.breakpoint.width < 960) {
                // Set the drawerOpen value to false for mobile devices
                this.drawer = false;
            } else {
                // Set the drawerOpen value to true for larger devices
                this.drawer = true;
            }
        },
    },

    mounted() {
        this.checkScreenWidth();
        // Add a listener for window resize events
        // window.addEventListener("resize", this.checkScreenWidth);
    },
    beforeDestroy() {
        // Clean up the listener when the component is destroyed
        // window.removeEventListener("resize", this.checkScreenWidth);
    },
};
</script>
<style scoped>
.border {
    border-left: 4px solid #0ba518;
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 10px;
}

.v-list-group__items {
    margin-left: 5px !important;
}
</style>
