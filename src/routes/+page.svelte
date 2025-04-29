<script lang="ts">
    import { Card, CardBody, CardFooter, CardHeader, CardImg, CardText, Col, Container, Image, Row,} from '@sveltestrap/sveltestrap';
</script>

<svelte:head>
    <title>Главная</title>
</svelte:head>

<Container class="shadow-lg p-2">
    <h1 class="text-center">Добро пожаловать на главную страницу!</h1>
    <p>Работу представляет:ФИО</p>
    <p>Тема: </p>
    
    <Row>
        <Col>
            <Card>
                <CardHeader>Lada2114</CardHeader>
                <CardBody>
                    <CardImg src="https://avatars.mds.yandex.net/get-autoru-reviews/1533577/e41103d5a99abd43f1bf03b34ebdcf33/1200x900"/>
                    <CardText>79л.с.</CardText>
                </CardBody>
            </Card>
        </Col>

        <Col>
            <Card>
                <CardHeader>Название</CardHeader>
                <CardBody>
                    <CardImg src="https://avatars.mds.yandex.net/get-autoru-reviews/1533577/e41103d5a99abd43f1bf03b34ebdcf33/1200x900"/>
                    <CardText>Lada 2114</CardText>
                </CardBody>
            </Card>
        </Col>

        <Col>
            <Card>
                <CardHeader>Название</CardHeader>
                <CardBody>
                    <CardImg src="https://avatars.mds.yandex.net/get-autoru-reviews/1533577/e41103d5a99abd43f1bf03b34ebdcf33/1200x900"/>
                    <CardText>Lada 2114</CardText>
                </CardBody>
            </Card>
        </Col>
    </Row>

</Container>

