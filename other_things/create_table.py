from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Text, TIMESTAMP, func

# Verbindungs-URL für MariaDB
DATABASE_URL = "mariadb+pymysql://root:rootpassword@localhost/user_management"

# Engine und Metadata erstellen
engine = create_engine(DATABASE_URL)
metadata = MetaData()

# Tabelle definieren
users_table = Table(
    "users",
    metadata,
    Column("id", Integer, primary_key=True, autoincrement=True),
    Column("username", String(255), nullable=False, unique=True),
    Column("password", String(255), nullable=False),
    Column("name", String(255)),
    Column("address", Text),
    Column("created_at", TIMESTAMP, server_default=func.current_timestamp())
)

# Tabelle in der Datenbank erzeugen
metadata.create_all(engine)

print("Die Tabelle 'users' wurde erfolgreich in der MariaDB-Datenbank erstellt.")
