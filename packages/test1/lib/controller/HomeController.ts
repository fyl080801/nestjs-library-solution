import { Controller } from '@nestjs/common';
import { ViteView } from '@nestseed/vite-service';

@Controller('home')
export class HomeController {
  @ViteView('index', 'index.html')
  index() {
    return 'hello';
  }
}
