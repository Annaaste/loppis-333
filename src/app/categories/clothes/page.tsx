// app/categories/jul/page.tsx
import childrensclothes  from '../../../../data/childrensclothes.json';
import Image from 'next/image';


type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function Page() {

  return (
    <div>
      <h1>Barnkläder Produkter</h1>
      <div className="grid"> {/* Använder nu grid-stylingen från layout.module.scss */}
        {childrensclothes.map((item: Item) => (
          <div key={item.id} className="card"> {/* Använder card-stylingen från layout.module.scss */}
            <Image src={item.image} alt={item.title} width={200} height={200} />
            <h3>{item.title}</h3>
            <p>Pris: {item.price} SEK</p>
          </div>
        ))}
      </div>
    </div>
  );
}