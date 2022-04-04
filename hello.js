const Ninjas = (props) => {
	const { ninjas } = props;
	return (
		<div>
			<Title title="Ninjas | Listing" />
			<div>
				<h1>All ninjas</h1>
				{ninjas.map((ninja) => {
					return (
						<Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
							<a className={styles.single}>
								<h3>{ninja.name}</h3>
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
