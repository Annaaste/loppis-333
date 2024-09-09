import jul  from '../../../data/jul.json';
import styles from './Jul.module.scss'
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
    <main className={styles.main}>
      <div>
        <p>Hej</p>
      </div>
      <div>
      {jul.map((item: Item) => (
        <div key={item.id}>
          <Image
              src={item.image}
              alt={item.title}
              width={200} // Adjust the width as needed
              height={200} // Adjust the height as needed
            />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Pris: {item.price} SEK</p>
        </div>
      ))}
      </div>
    </main>
  );
}

