<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Добавление курьера
            </h1>
            <ol class="breadcrumb">
                <li>
                    <router-link to="/cabinet/admin/"> Главная</router-link>
                </li>
                <li class="active">Добавление курьера</li>
            </ol>
        </section>
        <!-- Main content -->
        <section class="content">

            <b-form @submit="formSubmit">
                <div class="box">
                    <!-- /.box-header -->
                    <div class="box-body">
                        <b-alert variant="danger" :show="errors.length > 0">
                            <ul>
                                <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
                            </ul>
                        </b-alert>
                        <b-row>
                            <b-col md="6">
                                <b-form-group label="Логин" label-for="username">
                                    <b-form-input id="username" v-model="form.username" type="text" class="col-md-6" required/>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group label="Пароль" label-for="password">
                                    <b-form-input id="password" v-model="form.password" type="password"
                                                  class="col-md-6" required/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col md="6">
                                <b-form-group label="Телефон" label-for="phone">
                                    <b-form-input id="phone" v-model="form.phone" type="text" class="col-md-6" required/>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group label="Email" label-for="email">
                                    <b-form-input id="email" v-model="form.email" type="email" class="col-md-6" required/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col md="6">
                                <b-form-group label="Имя" label-for="firstName">
                                    <b-form-input id="firstName" v-model="form.fullName.firstName" type="text" class="col-md-6" required/>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group label="Фамилия" label-for="lastName">
                                    <b-form-input id="lastName" v-model="form.fullName.lastName" type="text" class="col-md-6" required/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col md="6">
                                <b-form-group label="Отчество" label-for="middleName">
                                    <b-form-input id="middleName" v-model="form.fullName.middleName" type="text" class="col-md-6" required/>
                                </b-form-group>
                            </b-col>
                        </b-row>

                    </div>

                    <div class="box-footer">
                        <b-btn type="submit" variant="primary" :disabled="isLoading" class="pull-right">
                            <b-spinner small v-if="isLoading"></b-spinner>
                            Добавить
                        </b-btn>&nbsp;
                    </div>

                </div>
            </b-form>
        </section>
        <!-- /.content -->
    </div>
</template>


<script>
    import {mapGetters, mapState} from 'vuex'
    import toastr from "toastr";

    export default {
        computed: {
            ...mapState(['identity']),
            ...mapGetters({
                isLoading: 'carrierCourier/isLoading',
                errors: 'carrierCourier/errors'
            }),
        },
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    email: '',
                    phone: '',
                    fullName: {
                        firstName: '',
                        lastName: '',
                        middleName: ''
                    }
                }
            }
        },
        methods: {
            async formSubmit(e) {
                e.preventDefault()
                const payloadData = {}
                for (let key in this.form) {
                    const value = this.form[key]
                    if (value !== null && value !== '') {
                        payloadData[key] = value
                    }
                }
                const result = await this.$store.dispatch('carrierCourier/create', payloadData)
                if (result) {
                    this.$router.push({name: 'CabinetCarrierIndex'})
                    toastr.success('Курьер успешно добавлен')
                }
            }
        }
    }
</script>