/**
 * Copyright 2018 Simon Edwards <simon@simonzone.com>
 */
import { Line } from "term-api";
import { ExtratermAceEditor } from "./ExtratermAceEditor";
import { TerminalEditSession } from "./TerminalEditSession";


export class TerminalAceEditor extends ExtratermAceEditor {

  setTerminalLine(row: number, line: Line): void {
    const session = <TerminalEditSession> this.sessionOrThrow();
    if ( ! session.setTerminalLine(row, line)) {
      this.renderer.updateLines(row, row, true);
    }
  }

  getTerminalLine(row: number): Line {
    const session = <TerminalEditSession> this.sessionOrThrow();
    return session.getTerminalLine(row);
  }

  appendTerminalLine(line: Line): void {
    const session = <TerminalEditSession> this.sessionOrThrow();
    session.appendTerminalLine(line);
  }
}
