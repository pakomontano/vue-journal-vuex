<template>
  <div
    class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">13</span>
        <span class="mx-1 fs-3">Noviembre</span>
        <span class="mx-2 fs-4 fw-ligth">2022</span>
    </div>
    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
            Subir imagen
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>

  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedio hoy?"
    ></textarea>
  </div>
  <Fab icon='fa-save'/>
  <img src="https://memolira.com/wp-content/uploads/2020/10/SSC-Tuatara-el-auto-mas-veloz-de-la-historia-1320x786.jpg"
    alt="entry picture"
    class="img-thumbnail"/>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {

    components:{
        Fab :  defineAsyncComponent ( () => import('../components/Fab.vue')),
    }

}
</script>

<style lang="scss" scoped>

textarea{
    font-size: 20px;
    border:none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 10px 5px 10px rgb($color: #000000, $alpha:0.2);
}

</style>