import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const FootBar = () => {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <p>Author Aaron Cullen</p>
                <p><a href="https://github.com/aaroncul/claims-ui">Git Repository</a></p>
            </Container>
        </Navbar>
    )
}

export default FootBar;