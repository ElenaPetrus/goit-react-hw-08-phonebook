const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать, </span>
      <button type="button">Выйти</button>
    </div>
  );
}
