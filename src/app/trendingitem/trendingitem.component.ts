import { Component } from '@angular/core';

@Component({
  selector: 'app-trendingitem',
  templateUrl: './trendingitem.component.html',
  styleUrls: ['./trendingitem.component.css'],
})
export class TrendingitemComponent {
  items = [
    [
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230526/pYuQ/647029d3d55b7d0c630b5689/-473Wx593H-465544616-green-MODEL2.jpg',
        text: 'Image 1.1',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230908/rqBz/64faccbcafa4cf41f5d255f4/-473Wx593H-466549497-white-MODEL.jpg',
        text: 'Image 1.2',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20231010/HgiJ/65253820ddf77915192ff036/-473Wx593H-442271592-grey-MODEL.jpg',
        text: 'Image 1.1',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230519/3RzR/64667a8142f9e729d7996c0e/-473Wx593H-466165120-wine-MODEL.jpg',
        text: 'Image 1.2',
      },
    ],
    [
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20220909/zS8N/631a5cd2f997dd1f8defe7cb/-473Wx593H-441146619-grey-MODEL.jpg',
        text: 'Image 2.1',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230723/QGYJ/64bc7fe4eebac147fc833f5a/-473Wx593H-466364813-cream-MODEL.jpg',
        text: 'Image 2.2',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230621/7RgB/64928fbc42f9e729d7694d28/-473Wx593H-463893735-multi-MODEL.jpg',
        text: 'Image 1.2',
      },
      {
        image:
          'https://assets.ajio.com/medias/sys_master/root/20230629/KAkA/649ce1e2eebac147fc349427/-473Wx593H-466044959-magenta-MODEL.jpg',
        text: 'Eyeboger',
      },
    ],
    // Add more sub-arrays for additional slides with multiple images
  ];
}
