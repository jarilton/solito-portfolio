import { A, H1, P } from 'app/design/typography'
import { View, ScrollView } from 'app/design/view'
import { Platform } from 'react-native'
import { Img } from 'app/design/image'

const baseContainerStyle = Platform.select({
  web: 'items-center justify-center',
})

export function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 p-3 mt-16"
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 56,
      }}
    >
      <View className={`w-full max-w-xl flex-row ${baseContainerStyle}`}>
        <Img source={{uri: "https://github.com/jarilton.png"}} className="rounded-full w-32 h-32 mr-4" />
        <View className='flex-1 flex-col'>
          <H1>Olá, sou o Jamal</H1>
          <P>Desenvolvedor Fullstack</P>
          <P className='mt-2'>React Native, React, Node.js, Typescript</P>
          <P className='mt-4'>
            Reach me on{' '}
            <A href="https://www.linkedin.com/in/jarilton-junior-jamal-031251116/n">@jarilton</A>
          </P>
        </View>
      </View>
    </ScrollView>
  )
}
