<template>
<div class="MuiBox-root css-137bkzq">
     <ContentOne />
     <ContentTwo />
     <ContentThree />
     <ContentCardList />
     <ContentCardTx />
     <ContentCardPerson />

</div>
</template>
<script>
import ContentOne from './ContentOne.vue';
import ContentCardList from './ContentCardList.vue';
import ContentThree from './ContentThree.vue';
import ContentTwo from './ContentTwo.vue';
import ContentCardTx from './ContentCardTx.vue';
import ContentCardPerson from '@/components/ContentCardPerson.vue';
export default {
    components: {
        ContentOne,
        ContentTwo,
        ContentThree,
        ContentCardList,
        ContentCardTx,
        ContentCardPerson
    }
}
</script>
<style >
.css-137bkzq {
    max-width: 1290px;
    margin: auto;
    background: black;
    width: 100%;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

@media (min-width: 0px) {
    .css-137bkzq {
        margin-top: 74px;
        overflow: hidden;
    }
}

@media (min-width: 600px) {
    .css-137bkzq {
        margin-top: 100px;
    }
}</style>
