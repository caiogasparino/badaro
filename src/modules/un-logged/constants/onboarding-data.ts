import { ImageSourcePropType } from 'react-native'
import { ONBOARDING_IMAGES } from '../assets/onboarding'

export type TypeItemOnboarding = {
  id: string
  icon: ImageSourcePropType
  title: string
  subTitle: string
}

export const ONBOARDING_DATA: TypeItemOnboarding[] = [
  {
    id: '1-index',
    icon: ONBOARDING_IMAGES.ONBOARD1,
    title: `Bem vindo a\nBadaró`,
    subTitle:
      'Somos uma Consultoria Estratégica de Design de Experiências e Tecnologia',
  },
  {
    id: '2-index',
    icon: ONBOARDING_IMAGES.ONBOARD2,
    title: `Alocação de Talentos`,
    subTitle: 'Poder transformador das pessoas',
  },
  {
    id: '3-index',
    icon: ONBOARDING_IMAGES.ONBOARD3,
    title: `Produtos Digitais`,
    subTitle: 'Experiências marcantes e memoráveis',
  },
]
