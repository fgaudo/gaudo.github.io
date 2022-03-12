import Head from 'next/head'
import Layout from '@/presentation/shared/layout'

export type SkillsModel = {
    skills: {
        [name: string]: number
    }
}

export const GdSkills = (model: SkillsModel) => {
    return (
        <Layout>
            <Head>
                <title>Skills | Francesco Gaudenzi</title>
            </Head>
            <table>
                <tbody>
                    {Object.entries(model.skills).map((skill, index) =>
                        <tr key={index}>
                            <td>{skill[0]}</td><td>{skill[1]}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Layout>
    )
}

export default GdSkills;