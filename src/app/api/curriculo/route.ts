import { join } from 'path';
import { createReadStream, existsSync } from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = join(process.cwd(), 'src/storage', 'curriculo.pdf');

  if (!existsSync(filePath)) {
    return new NextResponse('Arquivo não encontrado', { status: 404 });
  }

  const fileStream = createReadStream(filePath);

  const readableStream = new ReadableStream({
    start(controller) {
      fileStream.on('data', (chunk) => {
        controller.enqueue(chunk);
      });

      fileStream.on('end', () => {
        controller.close();
      });

      fileStream.on('error', (error) => {
        console.error('Erro ao ler o arquivo:', error);
        controller.error(error);
      });
    },
  });

  const headers = new Headers();
  headers.set('Content-Disposition', 'attachment; filename=curriculo.pdf');
  headers.set('Content-Type', 'application/pdf');

  return new NextResponse(readableStream, {
    status: 200,
    headers: headers,
  });
}
