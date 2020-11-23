const ChatRooms = [
  {
    id: '1',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://images.unsplash.com/photo-1605947464626-cbb0f72ee82d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 'u2',
        name: 'Lukas',
        imageUri:
          'https://images.unsplash.com/photo-1605977216813-2db4874819b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
      },
    ],
    lastMessage: {
      id: 'm1',
      content: 'Well done this sprint, guys!',
      createdAt: '2020-10-03T14:48:00.000Z',
    },
  },
  {
    id: '2',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://images.unsplash.com/photo-1605964870002-7aca0d4d6e97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 'u3',
        name: 'Daniil',
        imageUri:
          'https://images.unsplash.com/photo-1605915532179-0fd65403813e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      },
    ],
    lastMessage: {
      id: 'm2',
      content: 'How are you doing?',
      createdAt: '2020-10-02T15:40:00.000Z',
    },
  },
  {
    id: '3',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://images.unsplash.com/photo-1605951119672-2ec512ff39cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      },
      {
        id: 'u4',
        name: 'Alex',
        imageUri:
          'https://images.unsplash.com/photo-1601758004484-733647916908?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
    lastMessage: {
      id: 'm3',
      content: 'Hi, Vadim.',
      createdAt: '2020-10-02T14:48:00.000Z',
    },
  },
  {
    id: '4',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://images.unsplash.com/photo-1606015218098-77835ec98075?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 'u5',
        name: 'Vlad',
        imageUri:
          'https://images.unsplash.com/photo-1606034110279-48c16c742053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      },
    ],
    lastMessage: {
      id: 'm4',
      content: 'Can you review my last merge',
      createdAt: '2020-09-29T14:48:00.000Z',
    },
  },
  {
    id: '5',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://images.unsplash.com/photo-1606031814821-c1696d3c7178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      },
      {
        id: 'u6',
        name: 'Elon Musk',
        imageUri:
          'https://images.unsplash.com/photo-1606022753327-94355bc36a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      },
    ],
    lastMessage: {
      id: 'm5',
      content: 'I would be happy',
      createdAt: '2020-09-30T14:48:00.000Z',
    },
  },
  {
    id: '6',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://images.unsplash.com/photo-1606059100110-4230429584fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      },
      {
        id: 'u7',
        name: 'Adrian',
        imageUri:
          'https://images.unsplash.com/photo-1605969502282-106bcd035d06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      },
    ],
    lastMessage: {
      id: 'm6',
      content: 'I have a solution',
      createdAt: '2020-10-02T15:40:00.000Z',
    },
  },
  {
    id: '7',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://images.unsplash.com/photo-1606032351776-94b021c19aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      },
      {
        id: 'u8',
        name: 'Borja',
        imageUri:
          'https://images.unsplash.com/photo-1606017259054-04b65b590488?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
      },
    ],
    lastMessage: {
      id: 'm7',
      content: 'How are you doing?',
      createdAt: '2020-10-02T15:40:00.000Z',
    },
  },
  {
    id: '8',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://images.unsplash.com/photo-1605977562429-7df37ae586b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
      },
      {
        id: 'u9',
        name: 'Mom',
        imageUri:
          'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
      },
    ],
    lastMessage: {
      id: 'm8',
      content: 'Dear, did you eat?',
      createdAt: '2020-09-27T15:40:00.000Z',
    },
  },
  {
    id: '9',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://images.unsplash.com/photo-1602524206567-9bf059d35ac3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      },
      {
        id: 'u10',
        name: 'Angelina Jolie',
        imageUri:
          'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
      },
    ],
    lastMessage: {
      id: 'm9',
      content: 'Meet me at the same place',
      createdAt: '2020-09-25T15:40:00.000Z',
    },
  },
];

export default ChatRooms;
