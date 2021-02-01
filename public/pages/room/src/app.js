const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

  const socketUrl = 'https://safe-cliffs-90147.herokuapp.com/';
  const socketBuilder = new SocketBuilder({ socketUrl })

  const peerConfig = Object.values({
    id: undefined,
    config: {
      host: 'blooming-sierra-21659.herokuapp.com',
      secure: true,
      path: '/'
    }
  });
  const peerBuilder = new PeerBuilder({ peerConfig });

  const view = new View();
  const media = new Media();
  const deps = {
    view,
    media,
    room,
    socketBuilder,
    peerBuilder
  };

  Business.initialize(deps);


  // view.renderVideo({ userId: 'teste01', url: 'https://media.giphy.com/media/KeoRcYovftKiilrKir/giphy.mp4' })
  // view.renderVideo({ userId: 'teste02', isCurrentedId: true, url: 'https://media.giphy.com/media/KeoRcYovftKiilrKir/giphy.mp4' })

}

window.onload = onload