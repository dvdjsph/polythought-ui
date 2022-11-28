// load nodes
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface TreeProps {
    nodes: Node[];
};


/*
[
   {
   id: "alkwejf;lkwe",
   label: "dog",
   elementa: ""
   }
]

 */

export const Tree = ({nodes}:TreeProps) => {
    return <TreeView
               aria-label="file system navigator"
               defaultCollapseIcon={<ExpandMoreIcon />}
               defaultExpandIcon={<ChevronRightIcon />}
               sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
           >
        <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
            <TreeItem nodeId="10" label="OSS" />
            <TreeItem nodeId="6" label="MUI">
                <TreeItem nodeId="8" label="index.js" />
            </TreeItem>
        </TreeItem>
    </TreeView>

}
