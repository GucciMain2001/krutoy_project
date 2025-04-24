<script lang="ts">
    import {Carousel, CarouselCaption, CarouselItem, Container, Image} from '@sveltestrap/sveltestrap';
</script>

<svelte:head>
    <title>Главная</title>
</svelte:head>

<Container class="shadow-lg p-2">
    <h1>Добро пожаловать на главную страницу!</h1>
    <p>На нашем сайте можно найти крутую информацию о фреймворках и библиотеках</p>
    <Carousel interval={3000}>
        <CarouselItem>
            <Image src="https://avatars.mds.yandex.net/i?id=4f62637c5162586faa035ffcd0874c4154c536d9-12471923-images-thumbs&n=13"/>
        </CarouselItem>
        <CarouselItem>
            <Image src="https://avatars.mds.yandex.net/i?id=020979e16c9d1a4633baa8fc2241ccac_l-5344756-images-thumbs&n=13"/>
        </CarouselItem>
    </Carousel>
</Container>

