import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  groups = [
    [
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20231010/h3BF/6525266eddf77915192fb56d/-473Wx593H-466691165-offwhite-MODEL2.jpg',
        text: 'Image 1.1',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230808/9x9d/64d2474aeebac147fcb45b0a/-473Wx593H-466434087-white-MODEL.jpg',
        text: 'Image 1.2',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230918/b6pt/65082aecddf7791519e083e3/-473Wx593H-466590507-green-MODEL.jpg',
        text: 'Image 1.1',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20220929/8BBN/6334acc0f997dd1f8d24a1e8/-473Wx593H-469316695-cream-MODEL.jpg',
        text: 'Image 1.2',
      },
    ],
    [
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20221212/3o9n/639762c9aeb269659ce3ecec/-473Wx593H-410316899-02a-MODEL.jpg',
        text: 'Image 2.1',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230315/0dQJ/6411f290aeb26924e3c472dc/-473Wx593H-410316899-00q-MODEL.jpg',
        text: 'Image 2.2',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230830/JOaP/64ef65ceddf77915198b7554/-473Wx593H-442295071-tintblue-MODEL.jpg',
        text: 'Image 1.2',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230321/ivpT/6418f0f6aeb26924e3d6eb19/-473Wx593H-465699829-green-MODEL.jpg',
        text: 'Eyeboger',
      },
    ],
    // Add more sub-arrays for additional slides with multiple images
  ];

  constructor() {}
}
