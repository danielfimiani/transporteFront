<template>
    <div class="h-full bg-gray-400 w-full p-16">
        <div class="card text-center shadow-xl p-8 max-h-full bg-white overflow-hidden">
            <div class="grid grid-cols-3 relative" id="print">
                <p>EP000717574N</p>
                <p>EP000719136N</p>
                <p>EP000719754N</p>
                <p>EP000724270N</p>
                <p>EP000725177N</p>
                <p>EP000727587N</p>
                <p>EP000727706N</p>
                <p>EP000728807N</p>
                <p>EP000728837N</p>
                <p>EP000729030N</p>
                <p>EP000730172N</p>
                <p>EP000730577N</p>
                <p>EP000729030N</p>
                <p>EP000730172N</p>
                <p>EP000730577N</p>
            </div>
            <div class="btn btn-lg" @click="Print"> Imprimir </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'BarCode',
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
p {
    font-family: 'LibreBarcode';
    font-size: 64px;
}
</style>