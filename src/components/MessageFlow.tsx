import { useState } from 'react';

const MessageFlow = ({ onComplete }: { onComplete: (gift: boolean) => void }) => {
  const [step, setStep] = useState(0);

  const messages = [
    {
      title: "De: Junior para Rebeca",
      text: `É, meu amor, desde 12 de outubro de 2018, o dia em que te conheci e me encantei por você, eu não imaginava que você seria tão incrível como mãe. Na verdade, eu já imaginava sim, mas você é tão perfeita que supera tudo.

Você vive o verdadeiro significado de ser mãe: ser cuidadosa, ser guerreira e não ter tempo ruim quando o assunto é a nossa filha. Você é uma mulher completa: trabalhadora, guerreira, amiga, temente a Deus, uma excelente esposa e uma excelente "marrentinha" (kkk). A única coisa que faltava na sua coroa era ser mãe, e você ganhou essa estrela e a faz brilhar com perfeição, como faz com tudo.

Você é mais do que uma simples mãe, e hoje é mais que um simples Dia das Mães. Talvez porque hoje seja o primeiro, talvez porque hoje venha também com o sentimento do ano passado que foi adiado... Talvez porque não tenha sido do nosso jeito, mas sim do jeitinho perfeito de Deus. E sou grato a Deus por ter sido exatamente como está sendo. Amo minha família, amo minha filha e amo você.

Deus é bom o tempo todo. Não conseguimos da primeira vez e Deus foi bom; conseguimos agora e você está vivendo seu primeiro Dia das Mães e Deus continua sendo bom. O tempo todo Ele é bom. Foi bom ao me apresentar você e permitir que construíssemos nossa família.

Você é a nossa Rainha de casa, o nosso pilar, a calma que precisamos em dias difíceis. Você acalma tudo quando parece desmoronar, porque em todo esse tempo você nunca desistiu. O cansaço às vezes traz o pensamento de desistir, mas você nunca abriu mão de nada por ser desafiador, e não abriu mão de ser a mãe que é hoje. Independentemente das horas de sono que te fizeram falta, valeu a pena cada segundo.

Tudo o que passamos nos moldou para a responsabilidade que temos hoje. Olho para você e só consigo sentir orgulho — não só pelo que fez por nós dois, mas por tudo o que faz pela nossa neguinha Juju. A Manuela não faz ideia da pessoa incrível que Deus preparou para ser a mãe dela, e acho que você ainda não tem ideia de como é incrível nesse papel.

Eu não tenho mais palavras para descrever o sentimento que tenho hoje. Você é a melhor mãe que a Manu poderia ter e a melhor mulher com quem eu poderia ter casado. Você nos orgulha demais.

Eu e a Manu te amamos muito. Feliz Dia das Mães para a minha esposa!`
    },
    {
      title: "Agora, uma mensagem da Manuzinha...",
      text: `"Gugugu da dá, guguguguug da dá dá, aaaiiiiiiiii!"

Brincadeira, mamãe! Kkkk. Eu tenho o mesmo humor do papai, não sei se isso é bom, mas... Pedi para o papai fazer isso desse jeito porque a letra dele é muito feia! E acho muito legal, porque o papai é sensacional. Ele é o melhor pai do mundo, melhor esposo e, mesmo que você não acredite, mamãe, ele é o melhor jogador de futebol que eu conheço! Ele não está no auge, mas mesmo assim ele destrói. Meu pai é fera! Te amo, papai! ❤️

Mas vamos lá, mamãe... eu queria te contar algo.

Desde quando Jesus me disse que me daria um lar e duas pessoas para cuidar de mim, nunca imaginei como seria. Não sabia que seria desse jeito tão bom. Quando fiquei na sua barriga e vi você orando, vi você chorando e ouvi você cantando (que, por sinal, você canta muito bem, mamãe!), eu senti que seríamos melhores amigas. Me perdoa por fazer você vomitar muito, mamãe; eu não queria, é que eu estava crescendo o mais rápido possível porque estava ansiosa para conhecer vocês!

A primeira vez que abri meu olho e te olhei, foi como se Jesus me falasse: "Oi Manu, essa é a mulher que terá o melhor colo para você em toda a sua vida". Foi amor à primeira vista. Na primeira vez que me pegou nos braços, senti como é ser desejada, como é ter consolo, apoio e um amor que nem sei explicar. No começo foi difícil aprender a mamar. Me desculpa se te machuquei, mas eu vi todo o seu esforço. Vi quando você disse para o papai que não importava a dor, você não iria parar de me amamentar. São essas pequenas coisas que te tornam especial. 

Vou fazer três meses de vida amanhã. Foram três meses em que eu cresci, e sei que a senhora cresceu também. Somos tão amigas que aprendemos tudo juntinhas. Se eu pudesse falar algo agora, olhando no seu olho, seria:

"Mamãe, você é a mulher mais incrível que eu conheço. Você tem um cuidado comigo sem explicação. Vejo você cansada de manhãzinha, com sono, e ainda assim tem toda a felicidade de ler a Bíblia comigo, brincar comigo e me estimular a ser um bebê forte. Você é minha pessoa favorita. 

Hoje comemoramos o Dia das Mães, mas saiba que vou te honrar todos os dias. E aí vai uma música: 'Mãããe, quer dizer carinho... Mãããe, quer dizer beijinho... Mãããe, eu te amooooo!'

Ano que vem eu vou estar correndo para levar seu presente, tá? Sobre o presente de hoje, conversei com o papai e vi que a senhora merecia algo especial. Papai não queria, mas como sou sua filha, ele deixou! (Brincadeira!). 

Eu te amo minha mamãe, melhor mamãe do mundo todo! Te amo mil milhões!"`
    }
  ];

  return (
    <div className="message-card">
      <h2>{messages[step].title}</h2>
      <div className="message-text">{messages[step].text}</div>
      
      {step < messages.length - 1 ? (
        <button className="btn-primary" onClick={() => setStep(step + 1)}>
          Ler mensagem da Manu ❤️
        </button>
      ) : (
        <button className="btn-primary" onClick={() => onComplete(true)}>
          Ver meu presente 🎁
        </button>
      )}
    </div>
  );
};

export default MessageFlow;