import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const indexPath = join(process.cwd(), 'dist', 'index.html');
let html = readFileSync(indexPath, 'utf-8');

// Convertir rutas absolutas a relativas
html = html.replace(/href="\/_astro\//g, 'href="./_astro/');
html = html.replace(/src="\/_astro\//g, 'src="./_astro/');
html = html.replace(/src="\/([^"]+\.(svg|png|webp|jpg|jpeg))"/g, 'src="./$1"');
html = html.replace(/url\('\/([^']+\.(svg|png|webp|jpg|jpeg))'\)/g, "url('./$1')");
html = html.replace(/url\("\/([^"]+\.(svg|png|webp|jpg|jpeg))"\)/g, 'url("./$1")');
html = html.replace(/background-image:\s*url\((['"]).\/([^'"]+)\1\)/g, 'background-image: url($1./$2$1)');

writeFileSync(indexPath, html);
console.log('✅ Rutas convertidas a relativas correctamente');
