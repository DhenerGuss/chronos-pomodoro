import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../template/MainTemplate";

import styles from "./styles.module.css";

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p className={styles.p}>
          Modifique as configurações de para tempo de foco, descanso curto e
          descanso longo
        </p>
      </Container>

      <Container>
        <div className={styles.form}>
          <div className={styles.formRow}>
            <DefaultInput id="workTime" labelText="Foco" />
          </div>
          <div className={styles.formRow}>
            <DefaultInput id="shortBreakTime" labelText="Descanso curto" />
          </div>
          <div className={styles.formRow}>
            <DefaultInput id="longBreakTime" labelText="Descanso longo" />
          </div>
          <div className={styles.formRow}>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </div>
      </Container>
    </MainTemplate>
  );
}
