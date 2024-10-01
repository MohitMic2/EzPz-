"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets('views');
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, 'views'));
    app.setViewEngine('hbs');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('EZPZ')
        .setDescription('The ezpz API description')
        .setVersion('1.0')
        .addTag('ezpz')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/', app, document, {
        customSiteTitle: 'Ezpz',
    });
    await app.listen(process.env.Port || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map