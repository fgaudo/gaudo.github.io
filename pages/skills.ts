import type { NextPage } from 'next'
import skills from '@/presentation/views/skills'
import s from '@/domain/skills'

const Skills: NextPage = () => {
    return skills({ skills: s });
}

export default Skills
