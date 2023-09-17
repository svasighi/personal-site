import Image from 'next/image';
import styles from './sidebar.module.scss';
import Link from 'next/link';

//assets
import profile from '@public/profile.png';

export const Sidebar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.top}>
					<div className={styles.name}>
						Shadmehr
						<br />
						Vasighi
					</div>
					<div className={styles.role}>
						frontend <br />
						developer
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.first}>
						<hr />
						<div>
							<span>5</span>
							projects
						</div>
					</div>
					<div className={styles.second}>
						<Link href='https://wa.me/989196850370'>Whatsapp</Link>
						<hr />
					</div>
					<div className={styles.third}>
						<Link href='https://www.linkedin.com/in/svasighi/'>Linkedin</Link>
						<hr />
					</div>
					<div className={styles.fourth}>
						<Link href='https://github.com/svasighi/'>Github</Link>
						<hr />
					</div>
					<div className={styles.fifth}>
						<div>
							<span>+2</span>
							years of
							<br />
							Experience
						</div>
						<hr />
					</div>
				</div>
				<div className={styles['inner_bottom_bg']}></div>
			</div>
			<div className={styles.picture}>
				<div className={styles.pill}></div>
				<Image src={profile} alt='shadmehr vasighi' />
			</div>
		</div>
	);
};
