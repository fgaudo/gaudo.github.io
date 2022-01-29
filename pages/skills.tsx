import type { NextPage } from 'next'
import Head from 'next/head'

const Skills: NextPage = () => {
    return (
        <>
            <Head>
                <title>Skills | Francesco Gaudenzi</title>
            </Head>
            <table>
                <tr><th>Skill</th><th>Experience</th></tr>
                <tr><td>Node.js</td><td>*****</td></tr>
                <tr><td>Dart</td><td>*****</td></tr>
                <tr><td>Flutter</td><td>****</td></tr>
                <tr><td>Vue.js</td><td>****</td></tr>
                <tr><td>Functional programming</td><td>****</td></tr>
                <tr><td>Angular</td><td>***</td></tr>
                <tr><td>React</td><td>***</td></tr>
                <tr><td>Debian GNU/Linux</td><td>****</td></tr>
            </table>
        </>
    )
}

export default Skills
