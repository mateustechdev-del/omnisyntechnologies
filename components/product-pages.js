export const products = {
  "omniguide": {
    headline: "Precisão no campo, passada após passada.",
    orbitTerms: ["Trajetória", "Alinhamento", "Passadas"],
    name: "OmniGuide", title: "Pilotagem de precisão semiautônoma",
    intro: "O OmniGuide auxilia o operador a manter a máquina alinhada às passadas planejadas. O operador supervisiona a condução e assume o comando quando necessário.",
    image: "pilotagem", alt: "Vista aérea de trator entre linhas da lavoura", visual: "Trajetória de referência e passada em andamento",
    scenario: "Durante uma passada no talhão, o operador usa a linha planejada como referência para acompanhar o alinhamento da máquina.",
    steps: [
      ["Definir a referência", "Antes de iniciar, a equipe define a trajetória que servirá de referência para a passada."],
      ["Acompanhar a condução", "A orientação visual indica o alinhamento em relação à referência. A assistência semiautônoma prevê intervenção na direção, com nível de atuação ainda a validar."],
      ["Supervisionar a passada", "O operador acompanha a condução e assume o comando sempre que necessário."]
    ]
  },
  omnisoil: {
    headline: "Até onde a água chegou?",
    orbitTerms: ["Umidade", "Profundidade", "Raízes"],
    name: "OmniSoil", title: "Monitoramento da umidade na zona das raízes",
    intro: "O OmniSoil é proposto para mostrar onde, em que profundidade e por quanto tempo o solo está perdendo umidade.",
    image: "monitoramento", alt: "Sonda inserida no solo de uma área cultivada", visual: "Leituras do solo por área",
    scenario: "Em um exemplo ilustrativo, dois pontos de um talhão apresentam leituras diferentes de umidade. A diferença indica onde vale repetir a medição e fazer uma vistoria.",
    steps: [
      ["Registrar a leitura", "No exemplo, a grandeza observada é a umidade do solo no ponto de coleta."],
      ["Comparar áreas", "Associe cada leitura ao local da coleta e compare pontos em condições semelhantes."],
      ["Investigar a diferença", "A interpretação agronômica considera fatores como chuva, irrigação e condições locais do solo antes de orientar o manejo."]
    ]
  },
  omniseed: {
    headline: "Cada linha conta na hora de plantar.",
    orbitTerms: ["Sementes", "Distribuição", "População-alvo"],
    name: "OmniSeed", title: "Monitoramento da distribuição de sementes, linha por linha",
    intro: "O OmniSeed é proposto como um monitor instalado na plantadeira para identificar qual linha distribui sementes fora do planejado enquanto ainda dá tempo de corrigir a operação.",
    image: "plantio", alt: "Unidades de semeadura junto aos sulcos de plantio", visual: "Monitoramento da distribuição por linha",
    scenario: "Ao verificar uma linha recém-semeada, a equipe compara a posição das sementes com os parâmetros definidos para aquele talhão.",
    steps: [
      ["Espaçamento", "Meça a distância entre sementes consecutivas na mesma linha para avaliar a regularidade da distribuição."],
      ["Profundidade", "Meça a distância vertical entre a superfície do solo e a posição da semente."],
      ["Revisar a operação", "A proposta é acompanhar essas medidas e identificar variações. A atuação sobre a regulagem da plantadeira depende de validação."]
    ]
  },
  "omnicore": {
    headline: "Do solo à passada, uma só operação.",
    orbitTerms: ["Pilotagem", "Solo", "Plantio"],
    name: "OmniCore", title: "Pilotagem, solo e plantio em um só sistema",
    intro: "O OmniCore reúne a pilotagem semiautônoma do OmniGuide, o monitoramento do solo do OmniSoil e o plantio de precisão do OmniSeed para conectar as três frentes da operação agrícola.",
    scenario: "Durante o plantio de um talhão, a arquitetura proposta associa a trajetória da máquina, a deposição das sementes e as leituras do solo à mesma operação.",
    steps: [
      ["Pilotagem", "O OmniGuide auxilia a condução em relação à passada planejada."],
      ["Semeadura", "O OmniSeed acompanha a distribuição das sementes na linha."],
      ["Contexto do solo", "O OmniSoil fornece leituras para interpretar as diferenças entre áreas. A integração em campo precisa ser validada."]
    ]
  }
};
export const coreSlug = "omnicore";
export const productHighlights = {
  OmniGuide: {
    headline: "Cada passada tem uma referência.",
    description: "Compare o trajeto planejado com o realizado para identificar onde a máquina saiu do alinhamento.",
    image: "/fundo-trator.webp",
    alt: "Trator operando entre linhas da lavoura",
    advantages: [
      ["Alinhamento das passadas", "Use a trajetória planejada como referência ao percorrer o talhão."],
      ["Revisão de sobreposições", "Compare passadas vizinhas para identificar trechos que podem ter sido percorridos duas vezes."],
      ["Supervisão do operador", "Acompanhe a condução e assuma o comando quando necessário."]
    ]
  },
  OmniSoil: {
    headline: "O solo muda dentro do mesmo talhão.",
    description: "Uma leitura associada ao ponto de coleta ajuda a equipe a decidir onde voltar para conferir a condição do solo.",
    image: "/omnicore-saude.webp",
    alt: "Muda com raízes visíveis no solo",
    advantages: [
      ["Leituras com localização", "Relacione cada observação à área onde ela foi feita."],
      ["Comparação entre áreas", "Observe diferenças de umidade em condições semelhantes."],
      ["Vistorias direcionadas", "Priorize os pontos onde vale repetir a medição ou investigar a causa da diferença."]
    ]
  },
  OmniSeed: {
    headline: "A qualidade do plantio começa no sulco.",
    description: "A contagem nos tubos ajuda a identificar qual linha se afastou da população-alvo durante a passada.",
    image: "/lavoura.jpg",
    alt: "Linhas de cultivo vistas próximas ao solo",
    advantages: [
      ["Regularidade na linha", "Compare a contagem com a meta de sementes por metro."],
      ["Detecção de desvios", "Compare a taxa por linha com a tolerância configurada."],
      ["Revisão da regulagem", "Use as diferenças observadas em campo para orientar a checagem da plantadeira."]
    ]
  },
  OmniCore: {
    headline: "Uma passada reúne três decisões.",
    description: "Na integração proposta, o trajeto da máquina, a deposição das sementes e as leituras do solo podem ser revisados no contexto da mesma operação.",
    image: "/omnisyn-ecossistema.webp",
    alt: "Profissional consulta um mapa da lavoura em um tablet com trator ao fundo",
    advantages: [
      ["Trajetória e semeadura", "Compare o alinhamento da máquina com a distribuição das sementes na linha."],
      ["Contexto do solo", "Considere diferenças entre áreas ao revisar o que ocorreu durante o plantio."],
      ["Revisão da operação", "Reúna as observações da passada para decidir onde a equipe precisa verificar as condições no campo."]
    ]
  }
};
export const proposedScopes = {
  "omniguide": {
    question: "Quanto a máquina se afastou da trajetória planejada nesta passada?",
    rows: [
      ["Preparação", "O operador selecionaria o talhão e informaria a largura de trabalho do implemento para definir a distância entre passadas."],
      ["Trajetória de referência", "A partir de uma linha de referência definida no campo, o sistema traçaria as passadas vizinhas para o operador conferir antes de iniciar."],
      ["Orientação na cabine", "Durante a passada, a tela mostraria de que lado da referência a máquina está e a distância lateral até a linha planejada."],
      ["Condução supervisionada", "O operador acompanharia o alinhamento e poderia assumir a direção a qualquer momento. O nível de assistência à direção depende de validação na máquina."],
      ["Revisão do percurso", "Ao terminar, a equipe poderia comparar os trajetos planejado e percorrido para localizar trechos com possível sobreposição ou espaçamento excessivo."]
    ],
    example: "Ao retomar o trabalho depois de uma parada, o operador selecionaria a passada interrompida. Se o trator entrasse à direita da referência, a tela indicaria esse afastamento para ajudá-lo a retomar o alinhamento."
  },
  "omnicore": {
    question: "Em qual trecho da passada ocorreu um desvio de plantio e que informações do solo ajudam a orientar a vistoria?",
    rows: [
      ["Identificação da operação", "A equipe selecionaria o talhão e a operação de plantio. A trajetória, as contagens de sementes e as leituras das sondas manteriam seus respectivos locais e horários de registro."],
      ["Percurso com OmniGuide", "O trajeto percorrido pela máquina serviria de referência para localizar em qual passada ocorreu um desvio."],
      ["Distribuição com OmniSeed", "As contagens por linha seriam associadas ao trecho percorrido. O operador poderia consultar a taxa observada e compará-la com a meta de plantio."],
      ["Umidade com OmniSoil", "A equipe poderia consultar a estação próxima ao trecho e conferir a profundidade e o horário de cada leitura para interpretar as condições naquele ponto."],
      ["Revisão integrada", "Uma visão da operação reuniria a passada, a linha da plantadeira e os pontos de medição do solo para orientar a inspeção. A integração dos módulos ainda depende de validação em campo."]
    ],
    example: "Se a linha 7 registrasse menos sementes que o previsto, a equipe poderia localizar a passada no mapa e inspecionar o tubo correspondente. Para a vistoria do sulco, poderia consultar também a última leitura da sonda mais próxima e conferir a umidade no próprio trecho."
  },
  omnisoil: {
    question: "A chuva ou a irrigação repôs água até a profundidade que interessa para esta cultura?",
    rows: [
      ["Instalação", "O agrônomo seleciona pontos representativos do talhão e instala sondas em diferentes profundidades, por exemplo, 10, 30 e 50 cm. As camadas dependem da cultura, da fase de desenvolvimento e do tipo de solo."],
      ["Medição", "Cada sonda registra a umidade volumétrica ao longo do dia. A plataforma associa cada leitura ao ponto, à profundidade e ao horário para comparar a superfície com as camadas alcançadas pelas raízes."],
      ["Análise", "As curvas de umidade por profundidade podem ser comparadas com eventos de chuva ou irrigação. Isso mostra quais camadas responderam, quanto tempo levaram para responder e quando voltaram a secar."],
      ["Alertas", "O agrônomo configura faixas por área e profundidade. O sistema avisa quando uma camada permanece abaixo da faixa pelo período definido e sinaliza separadamente as sondas sem transmissão."],
      ["Entrega ao produtor", "O mapa localiza as estações e permite consultar o perfil de umidade, o histórico e os alertas de cada ponto para priorizar vistorias ou avaliar a irrigação."]
    ],
    example: "Após a irrigação, a sonda a 10 cm registra aumento de umidade, mas a de 30 cm continua abaixo da faixa configurada. O OmniSoil mostra as duas curvas e identifica o ponto. O agrônomo pode verificar a distribuição da água antes de alterar a irrigação do talhão inteiro."
  },
  omniseed: {
    question: "Cada linha da plantadeira está entregando a quantidade de sementes que planejei para esta passada?",
    rows: [
      ["Instalação", "Um sensor óptico em cada tubo detecta a passagem dos grãos. Um módulo embarcado identifica a linha de origem de cada pulso e recebe a velocidade pelo GNSS ou pelo sensor da máquina."],
      ["Configuração do plantio", "O operador informa o espaçamento entre linhas e a população-alvo em sementes por hectare. O sistema converte a meta em sementes por metro para comparar o previsto com o observado em cada linha."],
      ["Análise durante a passada", "A contagem de sementes e a distância percorrida dão a taxa por linha. Os intervalos entre pulsos apontam indícios de falhas e duplas, exibidos separadamente da contagem registrada."],
      ["Alertas na cabine", "O monitor destaca a linha que deixa de registrar sementes em operação ou fica abaixo da tolerância configurada. A lógica considera paradas e manobras de cabeceira para evitar alarmes durante interrupções intencionais."],
      ["Entrega ao produtor", "O operador vê a linha que precisa de atenção. Depois, o mapa registra trechos com desvio, extensão e população estimada. A medição representa a passagem pelo tubo. A posição final no sulco e a germinação exigem verificação em campo."]
    ],
    example: "Com linhas a 0,50 m e meta de 60 mil sementes por hectare, a referência é de 3 sementes por metro. Se a linha 7 registrar 2 sementes por metro e o desvio persistir além da tolerância, o monitor indica a linha e marca onde o problema começou."
  }
};
