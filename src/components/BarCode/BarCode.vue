<template>
    <div class="h-full bg-gray-400 w-full p-16">
        <div class="card text-center shadow-xl p-8 max-h-full bg-white overflow-hidden">
            <div class="flex relative justify-center items-center h-96" id="print">
                <svg id="code128"></svg>
                <svg id="code1282"></svg>
                <svg id="code1283"></svg>
                <svg id="code1284"></svg>
            </div>
            <div class="btn btn-lg" @click="Print"> Imprimir </div>
        </div>
    </div>
</template>

<script>
const JsBarcode = require('jsbarcode');
export default {
    name : 'BarCode',
    mounted(){
        JsBarcode('#code1281','EP000717574N',);
        JsBarcode('#code1282','EP0007ASDASN',);
        JsBarcode('#code1283','EPP-SS-17-4N',);
        JsBarcode('#code1284','EP000712314N',);
    },
    methods : {
        Print(){
            var originalContent = document.body.innerHTML;
            var contentToPrint = document.getElementById("print").innerHTML;
            document.body.innerHTML = contentToPrint;
            window.print();
            document.body.innerHTML = originalContent;
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'LibreBarcode';
    src: url("../../assets/LibreBarcode128Text-Regular.ttf");
}
</style>