INSERT INTO "user" ("nome", "email", "cpf", "telefone") VALUES
  ('Ana Silva', 'ana.silva@email.com', '12345678901', '11987654321'),
  ('Bruno Costa', 'bruno.costa@email.com', '10987654321', '11912345678'),
  ('Carla Souza', 'carla.souza@email.com', '22233344455', '11955551234')
ON CONFLICT ("email", "cpf") DO NOTHING;

INSERT INTO "veiculo" ("placa", "userId") VALUES
  ('ABC1234', 1),
  ('DEF5678', 2),
  ('GHI9012', 3)
ON CONFLICT ("placa") DO NOTHING;

INSERT INTO "servico" ("userId", "veiculoId", "dataEmissao") VALUES
  (1, 1, '2026-10-01 09:00:00'),
  (2, 2, '2026-10-01 10:30:00'),
  (3, 3, '2026-10-01 15:45:00')
ON CONFLICT DO NOTHING;
