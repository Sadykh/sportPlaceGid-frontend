<template>
    <main role="main" class=" inner cover cover-container-back">
        <div><h1 class="cover-heading">Добро пожаловать</h1>
        </div>
        <div class="row">
            <div class="col-md-5">
                <b-form-group label="Город" label-for="city">
                    <b-form-select id="city" v-model="form.city" :options="cityOptions"
                                   class="form-control">
                        <template slot="first">
                            <option :value="null" selected disabled>Выберите город</option>
                        </template>
                    </b-form-select>
                </b-form-group>
            </div>
            <div class="col-md-5">
                <b-form-group label="Категория" label-for="category">
                    <b-form-select id="category" v-model="form.category" :options="categoryOptions"
                                   class="form-control">
                        <template slot="first">
                            <option :value="null" selected disabled>Выберите категорию</option>
                        </template>
                    </b-form-select>
                </b-form-group>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>&nbsp;</label>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Поискать</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div id="map"   style="height: 500px; margin-bottom: 10px"></div>
<!--                <div id="map-container-google-1" class="z-depth-1-half map-container"-->
<!--                     style="height: 500px; margin-bottom: 10px">-->
<!--                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"-->
<!--                            frameborder="0" s-->
<!--                            style="border:0; width: 100%; height: 500px" allowfullscreen></iframe>-->
<!--                </div>-->
            </div>
        </div>
    </main>
</template>


<script>
    import {mapGetters, mapState} from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                cityList: 'city/items',
                categoryList: 'category/items',
                isLoading: 'city/isLoading',
                items: 'city/items'
            }),
            cityOptions() {
                return this.cityList.map((item) => {
                    return {
                        value: item.id,
                        text: item.name
                    }
                })
            },
            categoryOptions() {
                return this.categoryList.map((item) => {
                    return {
                        value: item.id,
                        text: item.name
                    }
                })
            }
        },
        created() {
            this.load()
        },
        methods: {
            load() {
                this.$store.dispatch('city/fetchAll')
                this.$store.dispatch('category/fetchAll')

                ymaps.ready(init);
                function init(){
                    var myMap = new ymaps.Map("map", {
                        center: [59.956359, 30.310081],
                        zoom: 11
                    });

                    myMap.geoObjects
                        .add(new ymaps.Placemark([59.956359, 30.310081], {
                            balloonContent: 'ИТМО'
                        }, {
                            preset: 'islands#icon',
                            iconColor: '#0095b6'
                        }))
                        .add(new ymaps.Placemark([59.971927, 30.320277], {
                            balloonContent: 'СПбГЭТУ Лэти'
                        }, {
                            preset: 'islands#icon',
                            iconColor: '#0095b6'
                        }))
                        .add(new ymaps.Placemark([60.007332, 30.372999], {
                            balloonContent: 'Санкт-Петербургский политехнический университет Петра Великого'
                        }, {
                            preset: 'islands#icon',
                            iconColor: '#0095b6'
                        }))
                        .add(new ymaps.Placemark([59.941881, 30.299040], {
                            balloonContent: 'Санкт-Петербургский государственный университет'
                        }, {
                            preset: 'islands#icon',
                            iconColor: '#0095b6'
                        }))
                        .add(new ymaps.Placemark([59.933883, 30.316550], {
                            balloonContent: 'СПбГУТ имени профессора М. А. Бонч-Бруевича'
                        }, {
                            preset: 'islands#icon',
                            iconColor: '#0095b6'
                        }))
                }



            },
        },
        data() {
            return {
                form: {
                    city: null,
                    category: null
                }
            }
        },
    }
</script>