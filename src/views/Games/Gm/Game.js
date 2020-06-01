
export default {
    data(){
        return{
            titulo: 'Grand the auto V',
            font_img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/btg/gamer.batanga.com/files/GTA-V-presenta-su-portada-2.jpg",
            link_font_img: "https://www.vix.com/es/btg/gamer/4844/gta-v-presenta-su-portada",
            requisitosMinimos: `
            <ul>
                <li><strong>Sistemas Operativos Soportados:</strong> Windows XP (32-64 bits) /Windows Vista
                    (32-64 bits)/Windows 7 (32-64 bits)</li>
                <li><strong>MicroProcesador:</strong> Intel Core 2 Duo 1.8 GHZ o AMD Athlon X2 64 2.4GHZ
                </li>
                <li><strong>RAM:</strong> 1.5 GB Windows XP / 2 GB Windows Vista - Windows 7</li>
                <li><strong>Chip Gráfico:</strong> 256 MB DirectX 9.0-compatible con Shader Model 3.0 o
                    superior (ver lista de tarjetas soportadas)</li>
                <li><strong>Tarjeta de Sonido:</strong> Compatible con DirectX 9.0</li>
                <li><strong>Versión de DirectX:</strong> DirectX 9.0</li>
                <li><strong>DVD-ROM:</strong> DVD-ROM de doble capa</li>
                <li><strong>Espacio en Disco Duro:</strong> 8 GB</li>
                <li><strong>Periféricos:</strong> Teclado, ratón, joystick opcional</li>
            </ul>`
        };
    },
    created(){
        this.xSize = screen.width;
    },
}