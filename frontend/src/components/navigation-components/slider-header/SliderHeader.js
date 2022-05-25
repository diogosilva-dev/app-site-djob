import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
    data: () => ({
        pauseOnHover: false,
        autoPlaying: true,
        slides: [
          {
            id: 'slide-1',
            title: '',
            content: '',
            image: require('@/assets/images-slider/slide-jeans.jpg'),
            link: ""
          },
          {
            id: 'slide-2',
            title: '',
            content: '',
            image: require('@/assets/images-slider/slide-meninas.jpg'),
            link: ""
          },
          {
            id: 'slide-3',
            title: '',
            content: '',
            image: require('@/assets/images-slider/slide-love.jpg'),
            link: ""
          },
         
        ]
      }),

    components: { VueperSlides, VueperSlide },
}