import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou <strong>João Nascimento</strong></Name>
          <Function><c className='skills'>FullStack Developer</c></Function>
          <Intro><p>Estou cursando Pós-Graduação
            em Engenharia de Software, atualmente, desenvolvendo
            meus conhecimentos em <c className='skills'>HTML, CSS, JavaScrip, React, Python, SQL, Análise de Sistemas</c>,
            entre outras linguagens através de Cursos, adquirindo
            novos conhecimentos em diferentes plataformas.
            Sou um entusiasta por técnologia, adoro aprender
            e explorar novas idéias e lugares.</p>
            A transição de carreira me permitiu desenvolver
            novas habilidades pessoais e profissionais, através
            da educação, técnologia e inovação. E é desta forma,
            que me impulsiono dia após dia aos meus objetivos.
          </Intro>
          <Link href="projects" passHref>
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/fotoLime.png" alt="logo" />
        </Logo>
      </Content>
    </Container >
  )
}
