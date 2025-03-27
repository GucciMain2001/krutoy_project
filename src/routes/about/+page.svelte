<script lang="ts">
	import { Card, CardBody, CardDeck, CardFooter, CardHeader, CardImg, CardLink, CardSubtitle, CardText, Col, Container, Row } from "@sveltestrap/sveltestrap";


</script>

<svelte:head>
    <title>О нас</title>
</svelte:head>

<Container>
    <h1>О нас</h1>
    <Row>

        <Col>
            <Card>
                <CardHeader>Ведущий JS-разработчик</CardHeader>
                <CardBody>
                    <CardImg src="https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/2/43/756324950630432.jpg"/>
                    <CardText>Иванов Иван Иванович</CardText>
                    <CardLink href="/link">Ссылка</CardLink>
                </CardBody>
                <CardFooter>
                    <CardSubtitle>Работает с 2021</CardSubtitle>
                </CardFooter>
            </Card>
        </Col>

        <Col>
            <Card>
                <CardHeader>Ведущий JS-разработчик</CardHeader>
                <CardBody>
                    <CardImg src="https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/2/43/756324950630432.jpg"/>
                    <CardText>Иванов Иван Иванович</CardText>
                    <CardLink href="/link">Ссылка</CardLink>
                </CardBody>
                <CardFooter>
                    <CardSubtitle>Работает с 2021</CardSubtitle>
                </CardFooter>
            </Card>
        </Col>

        <Col>
            <Card>
                <CardHeader>Ведущий JS-разработчик</CardHeader>
                <CardBody>
                    <CardImg src="https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/2/43/756324950630432.jpg"/>
                    <CardText>Иванов Иван Иванович</CardText>
                    <CardLink href="/link">Ссылка</CardLink>
                </CardBody>
                <CardFooter>
                    <CardSubtitle>Работает с 2021</CardSubtitle>
                </CardFooter>
            </Card>
        </Col>
    </Row>
</Container>