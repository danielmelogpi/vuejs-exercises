require.config({
    baseUrl: "./",
    paths: {
        "vuejs": "../bower_components/vue/dist/vue.min"
    },
    waitSeconds: 15
});

define([
    'require',
    'vuejs'
], function(require, Vue) {
    'use strict'; 
    
    var app1 = new Vue({
        el: "#app1",
        data: {
            nome: "Monster",
            newAnimal: null,
            animals: [
                "cow",
                "dog",
                "cat",
                "duck"
            ]
        },
        methods: {
            addAnimal: function() {
                console.log(this);
                this.animals.push(this.newAnimal);
                this.newAnimal = "";
            }
        }
    });

    console.log(app1);
});