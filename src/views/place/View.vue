<template>
    <main role="main" class=" inner cover cover-container-back" v-if="item">
        <div><h1 class="cover-heading text-center">{{item.name}}s</h1>
        </div>

        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Главная</a></li>
                    <li class="breadcrumb-item active">{{item.category_name}}</li>
                    <li class="breadcrumb-item active" aria-current="page">{{item.name}}</li>
                </ol>
            </nav>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">

                            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                 width="950" height="300" xmlns="http://www.w3.org/2000/svg"
                                 preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                                 aria-label="Placeholder: 900x300"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#eee"></rect>
                                <text x="50%" y="50%" fill="#aaa" dy=".3em">950x300</text>
                            </svg>
                        </div>
                        <div class="carousel-item">
                            <svg class="bd-placeholder-img" width="100%" height="100%"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img">
                                <rect width="100%" height="100%" fill="#777"/>
                            </svg>
                            <div class="container">
                                <div class="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <svg class="bd-placeholder-img" width="100%" height="100%"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img">
                                <rect width="100%" height="100%" fill="#777"/>
                            </svg>
                            <div class="container">
                                <div class="carousel-caption text-right">
                                    <h1>One more for good measure.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div class="row" style="margin-top: 20px">
                    <div class="col-md-3">
                        <svg class="bd-placeholder-img img-thumbnail" width="200" height="200"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img"
                             aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200">
                            <title>A generic square placeholder image with a white border around it, making it resemble
                                a photograph taken with an old instant camera</title>
                            <rect width="100%" height="100%" fill="#868e96"></rect>
                            <text x="30%" y="50%" fill="#dee2e6" dy=".3em">200x200</text>
                        </svg>
                    </div>
                    <div class="col-md-3">
                        <svg class="bd-placeholder-img img-thumbnail" width="200" height="200"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img"
                             aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200">
                            <title>A generic square placeholder image with a white border around it, making it resemble
                                a photograph taken with an old instant camera</title>
                            <rect width="100%" height="100%" fill="#868e96"></rect>
                            <text x="30%" y="50%" fill="#dee2e6" dy=".3em">200x200</text>
                        </svg>
                    </div>
                    <div class="col-md-3">
                        <svg class="bd-placeholder-img img-thumbnail" width="200" height="200"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img"
                             aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200">
                            <title>A generic square placeholder image with a white border around it, making it resemble
                                a photograph taken with an old instant camera</title>
                            <rect width="100%" height="100%" fill="#868e96"></rect>
                            <text x="30%" y="50%" fill="#dee2e6" dy=".3em">200x200</text>
                        </svg>
                    </div>
                    <div class="col-md-3">
                        <svg class="bd-placeholder-img img-thumbnail" width="200" height="200"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img"
                             aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200">
                            <title>A generic square placeholder image with a white border around it, making it resemble
                                a photograph taken with an old instant camera</title>
                            <rect width="100%" height="100%" fill="#868e96"></rect>
                            <text x="30%" y="50%" fill="#dee2e6" dy=".3em">200x200</text>
                        </svg>
                    </div>

                </div>

                <div class="row" style="margin: 20px 0;">
                    <div class="col-md-8">
                        <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 420px;">
                            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameborder="0" s
                                    style="border:0; width: 100%; height: 420px" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <dl>
                            <dt>Город</dt>
                            <dd>{{item.city_name}}</dd>
                            <dt>Категория</dt>
                            <dd>{{item.category_name}}</dd>
                            <dt>Адрес</dt>
                            <dd>Московское шоссе 125</dd>
                            <dt>Адрес</dt>
                            <dd>Московское шоссе 125</dd>
                            <dt>Координаты</dt>
                            <dd>58.123123, 62.12313123</dd>
                        </dl>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h3>Описание</h3>
                        <p>
                            {{item.description}}
                        </p>
                    </div>
                    <div class="col-md-12">
                        <h3>Дополнительные услуги</h3>

                        <ol>
                            <li v-for="service in item.serviceList">{{service.name}}</li>
                        </ol>
                    </div>
                    <div class="col-md-12">
                        <h3>Маршруты</h3>

                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Названиие</th>
                                <th scope="col">Сложность</th>
                                <th scope="col">Протяженность, м</th>
                                <th scope="col">Высота, м</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="router in item.routerList">
                                <th scope="row">1</th>
                                <td>{{router.name}}</td>
                                <td>{{router.level_name}}</td>
                                <td>{{router.length}}</td>
                                <td>{{router.height}}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script>
    import {mapGetters, mapState} from 'vuex'
    import {api} from "../../api";

    export default {
        computed: {
            ...mapGetters({
                item: 'place/item',
            }),
        },
        created() {
            this.load()
        },
        methods: {
            async load() {
                this.$store.dispatch('place/fetchOne', this.$route.params.id);
            }
        }
    }
</script>