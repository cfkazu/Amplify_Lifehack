import Image from "next/image"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Text ,Table} from "@nextui-org/react"
import styles from "../styles/Home.module.css"
import { Container, Row, Col } from '@nextui-org/react';
export default function OnePost({ id, postid, author, content, date, genre, title, who, when, where, what, result, caution }) {
    return (
        <>
            <Text
                h1
                size={60}
                weight="bold">
                {title}
            </Text>
            <Text h2>{author}</Text>
            <div> <AccessTimeIcon /><p>{date}</p></div>
            <p>{genre}</p>
            <Table
                aria-label="Example table with static content"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
            >
                <Table.Header>
                    <Table.Column></Table.Column>
                    <Table.Column></Table.Column>
                </Table.Header>
                <Table.Body>
                    <Table.Row key="1">
                        <Table.Cell>Who(誰が)</Table.Cell>
                        <Table.Cell>{who}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="2">
                        <Table.Cell>When(いつ)</Table.Cell>
                        <Table.Cell>{when}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="3">
                        <Table.Cell>Where(どこで)</Table.Cell>
                        <Table.Cell>{where}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="4">
                        <Table.Cell>What(何を)</Table.Cell>
                        <Table.Cell>{what}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="5">
                        <Table.Cell>Result(結果)</Table.Cell>
                        <Table.Cell>{result}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="6">
                        <Table.Cell>Caution(注意)</Table.Cell>
                        <Table.Cell>{caution}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="7">
                        <Table.Cell>備考</Table.Cell>
                        <Table.Cell>{content}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    )
}