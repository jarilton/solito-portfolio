import { A, H1, H2, H4, P } from 'app/design/typography'
import { View, ScrollView } from 'app/design/view'
import { Platform } from 'react-native'
import { Img } from 'app/design/image'

const repos = [
  {
    id: 1,
    name: 'react-native-nativewind',
    full_name: 'jarilton/react-native-nativewind',
    description: 'A React Native implementation of TailwindCSS',
    html_url: '',
  },
  {
    id: 2,
    name: 'react-native-solito',
    full_name: 'jarilton/react-native-solito',
    description: 'A React Native implementation of Solito',
    html_url: '',
  },
  {
    id: 3,
    name: 'solito',
    full_name: 'jarilton/solito',
    description: 'A React implementation of TailwindCSS',
    html_url: '',
  },
  {
    id: 4,
    name: 'nativewind',
    full_name: 'jarilton/nativewind',
    description: 'A React Native implementation of TailwindCSS',
    html_url: '',
  },
]

const baseContainerContentStyle:
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined = Platform.select({
  web: 'center',
  default: 'flex-start',
})

const baseContainerStyle = Platform.select({
  web: 'items-center',
})

interface IRepoProps {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
}

export function HomeScreen() {
  return (
    <ScrollView
      className={`mt-16 flex-1 p-3 ${baseContainerStyle}`}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 56,
        justifyContent: baseContainerContentStyle,
      }}
    >
      <View className={`w-full max-w-xl flex-row ${baseContainerContentStyle}`}>
        <Img
          source={{ uri: 'https://github.com/jarilton.png' }}
          className="mr-4 h-32 w-32 rounded-full"
        />
        <View className="flex-1 flex-col">
          <H1>Olá, sou o Jamal</H1>
          <P className="mt-2 font-semibold">Desenvolvedor Fullstack</P>
          <P className="mt-2">React Native, React, Node.js, Typescript</P>
          <P className="mt-4">
            Reach me on{' '}
            <A href="https://www.linkedin.com/in/jarilton-junior-jamal-031251116/n">
              @jarilton
            </A>
          </P>
        </View>
      </View>
      <View className="mt-8 max-w-xl">
        <View>
          <H2 className="mb-2">Sobre mim</H2>
          <P className="text-lg">
            Sou um desenvolvedor fullstack, apaixonado por tecnologia e
            programação. Atualmente trabalho com React Native, React, Node.js e
            Typescript.
          </P>
        </View>
      </View>
      <View className="mt-8">
        <H2 className="mb-2">Projetos</H2>
        {repos.map((repo) => (
          <View key={repo.id} className="mt-8">
            <H4 className="mr-4">{repo.name}</H4>
            <P>{repo.description}</P>
            <A target="_blank" href={repo.html_url}>
              Ver no Github
            </A>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
